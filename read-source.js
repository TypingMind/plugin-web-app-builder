async function read_web_app_source(params, userSettings, authorizedResources) {
  const source = authorizedResources?.previousRunOutput;
  if (typeof source !== 'string' || !source.length) {
    throw new Error('No web app source found. Call render_web_app first.');
  }
  return source;
}
