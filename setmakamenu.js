// MENU PARA DESFAZER

function cliqueUndoDORIAMenu(info, tab) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "undoDORIA"
        });
    });
}

var setDoriaMenu = chrome.contextMenus.create({"title": "Trazer o Doriana de volta :(", "contexts":["page"], "onclick": cliqueUndoDORIAMenu});
