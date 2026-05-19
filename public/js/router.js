export function getFlowFromUrl() {
  const params = new URLSearchParams(window.location.search);
  console.log("params-->",params);

  return {
    flow: params.get("flow") || "mobile",
    plan: params.get("plan") || null
  };
}