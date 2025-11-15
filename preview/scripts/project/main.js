
runOnStartup(async runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	if (window !== window.parent) {
		window.parent.postMessage({ type: "projectReady" }, "*");

		window.addEventListener("message", (event) => {
			if (event.data && event.data.type === "updateParam") {
				updateParam(runtime, event.data.index, event.data.value)
			}
		});
	}
}

function updateParam(runtime, index, value) {
	let inst = runtime.objects.Piggy.getFirstInstance()
	inst.effects[0].setParameter(index, value);
}
