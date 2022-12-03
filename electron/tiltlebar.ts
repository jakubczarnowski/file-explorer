import * as remote from "@electron/remote";

export function handleTitleBar() {
    const win = remote.getCurrentWindow();

    document.onreadystatechange = () => {
        if (document.readyState == "complete") {
            handleWindowControls();
        }
    };

    window.onbeforeunload = () => {
        win.removeAllListeners();
    };

    function handleWindowControls() {
        document.getElementById("min-button")?.addEventListener("click", (_) => {
            win.minimize();
        });

        document.getElementById("max-button")?.addEventListener("click", (_) => {
            win.maximize();
        });

        document.getElementById("restore-button")?.addEventListener("click", (_) => {
            win.unmaximize();
        });

        document.getElementById("close-button")?.addEventListener("click", (_) => {
            win.close();
        });

        // Toggle maximise/restore buttons when maximisation/unmaximisation occurs
        toggleMaxRestoreButtons();
        win.on("maximize", toggleMaxRestoreButtons);
        win.on("unmaximize", toggleMaxRestoreButtons);

        function toggleMaxRestoreButtons() {
            if (win.isMaximized()) {
                document.body.classList.add("maximized");
            } else {
                document.body.classList.remove("maximized");
            }
        }
    }
}
