import { escapeHtml } from './util'

// brainless js port of the original
const getParam = (path, device) => {
  let ref = device
  let nodes = path.split('.')
  let pp = []

  for (let node of nodes) {
    pp.push(node)
    let p = pp.join('.')
    if (p in ref) {
      ref = ref[p]
      pp = []
    }
  }

  if (pp.length !== 0) return null
  return ref
}

// a bit different return value from original but it's all
const paramValue = (path, device) => {
  let classes = ['long-text', 'param-value']

  let param = getParam(path, device)
  if (param === null) return { value: null, timestamp: null, classes: null }

  let val, timestamp
  if (typeof param === 'object') {
    val = '_orig' in param ? param['_orig'] : param['_value']
    if ('_timestamp' in param) timestamp = param['_timestamp']
    if (param['_writable']) classes.push('value-writable')
  } else val = param

  let valHtml = escapeHtml(val ? val.toString() : '')
  let barePath = path.replace(/\.\d+\./, '..')

  /* this piece of code calls custom formatters for some parameters
  if Rails.configuration.parameter_renderers.has_key?(bare_path)
    begin
      valHtml = ParameterRenderers::send(Rails.configuration.parameter_renderers[bare_path], val)
    rescue => e
      logger.error("Exception in renderer '#{Rails.configuration.parameter_renderers[path]}' for value '#{val}': #{e}")
    end
  end
  */

  return { value: valHtml, timestamp, classes }
}

const devices = { getParam, paramValue }

export { devices, getParam, paramValue }
