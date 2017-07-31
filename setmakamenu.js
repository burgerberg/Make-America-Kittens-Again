// MENU PARA DESFAZER

function DeMakaMenuClick(info, tab) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "undoDORIA"
        });
    });
}

var setMAKAmenu1 = chrome.contextMenus.create({"title": "Trazer o Doriana de volta :(", "contexts":["page"], "onclick": DeMakaMenuClick});
