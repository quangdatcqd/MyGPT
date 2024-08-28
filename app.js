async function genToken(e, t) {
    let n = "e"
        , r = performance.now();
    try {
        let n = null
            , o = getConfig();
        for (let a = 0; a < 500000; a++) {
            (!n || 0 >= n.timeRemaining()) && (n = await new Promise(e => {
                (window.requestIdleCallback || function (e) {
                    return setTimeout(() => {
                        e({
                            timeRemaining: () => 1,
                            didTimeout: !1
                        })
                    }
                        , 0),
                        0
                }
                )(t => {
                    e(t)
                }
                )
            }
            )),
                o[3] = a,
                o[9] = Math.round(performance.now() - r);
            let s = hashInput(o);
            if ((await sha3_512(e + s)).substring(0, t.length) <= t)
                return s
        }
    } catch (e) {
        console.log(e);

    }
    return "wQ8Lk5FbGpA2NcR9dShT6gYjU7VxZ4D" + n
}


function hashInput(e) {
    return (e = JSON.stringify(e)) ? btoa(String.fromCharCode(...new TextEncoder().encode(e))) : btoa(unescape(encodeURIComponent(e)))
}

function getConfig() {
    return [
        3028,
        "Tue Aug 27 2024 18:39:53 GMT+0700 (GMT+07:00)",
        4294705152,
        5414,
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
        "https://cdn.oaistatic.com/_next/static/chunks/2745-d251d833e8ea5a5a.js",
        "c/CszxOOqtLACfznhkCQN08/_",
        "vi-VN",
        "vi-VN",
        196,
        "windowControlsOverlay−[object WindowControlsOverlay]",
        "_reactListeningp3dmekpyl8f",
        "onscroll",
        7173926.900000095,
        "bfe6d6c1-bac0-4586-b709-fe540ee207a2"
    ]
}

// function getConfig() {
//     return [
//         3028,
//         "Wed Aug 28 2024 11:20:43 GMT+0700 (GMT+07:00)",
//         4294705152,
//         0.8477923326039234,
//         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
//         undefined,
//         "remix-prod-c312eeb4b9d6315044303ac323e242a5a72b3b1d",
//         "vi-VN",
//         "vi-VN",
//         0.6051540921880454,
//         "adAuctionComponents−function adAuctionComponents() { [native code] }",
//         "__reactContainer$losdv869gvg",
//         "onloadedmetadata",
//         3797.5,
//       "11b2af87-bd8b-4fed-b43f-7252a42700e3"
//     ]
// }

function loadResource(e) {
    r.clear(),
        r.set(0, getTurnstile),
        r.set(1, (e, t) => r.set(e, a("" + r.get(e), "" + r.get(t)))),
        r.set(2, (e, t) => r.set(e, t)),
        r.set(5, (e, t) => {
            let n = r.get(e);
            Array.isArray(n) ? n.push(r.get(t)) : r.set(e, n + r.get(t))
        }
        ),
        r.set(6, (e, t, n) => {
            return r.set(e, r.get(t)[r.get(n)])
        }),
        r.set(7, function (e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                n[i - 1] = arguments[i];
            return r.get(e)(...n.map(e => r.get(e)))
        }),
        r.set(17, function (e, t) {
            for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
                i[o - 2] = arguments[o];
            return r.set(e, r.get(t)(...i.map(e => r.get(e))))
        }),
        r.set(13, function (e, t) {
            try {
                for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
                    i[o - 2] = arguments[o];
                r.get(t)(...i)
            } catch (t) {
                r.set(e, "" + t)
            }
        }),
        r.set(8, (e, t) => r.set(e, r.get(t))),
        r.set(10, window),
        r.set(11, (e, t) => r.set(e, (Array.from([]).map(e => e?.src?.match(r.get(t))).filter(e => e?.length)[0] ?? [])[0] ?? null)),
        r.set(12, e => r.set(e, r)),
        r.set(14, (e, t) => r.set(e, JSON.parse("" + r.get(t)))),
        r.set(15, (e, t) => r.set(e, JSON.stringify(r.get(t)))),
        r.set(18, e => r.set(e, atob("" + r.get(e)))),
        r.set(19, e => r.set(e, btoa("" + r.get(e)))),
        r.set(20, function (e, t, n) {
            for (var i = arguments.length, o = Array(i > 3 ? i - 3 : 0), a = 3; a < i; a++)
                o[a - 3] = arguments[a];
            r.get(e) === r.get(t) && r.get(n)(...o)
        }),
        r.set(21, function (e, t, n, i) {
            for (var o = arguments.length, a = Array(o > 4 ? o - 4 : 0), s = 4; s < o; s++)
                a[s - 4] = arguments[s];
            return Math.abs(r.get(e) - r.get(t)) > r.get(n) ? r.get(i)(...a) : null
        }),
        r.set(23, function (e, t) {
            for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
                i[o - 2] = arguments[o];
            return void 0 !== r.get(e) ? r.get(t)(...i) : null
        }),
        r.set(24, (e, t, n) => r.set(e, r.get(t)[r.get(n)].bind(r.get(t)))),
        r.set(22, () => { }
        ),
        r.set(25, () => { }
        ),
        r.set(16, e)
}

let r = new Map();

async function getTurnstile(e) {
    return new Promise((t, n) => {
        let i = 0;
        setTimeout(() => t("" + i), 100),
            r.set(3, e => {
                t(btoa("" + e))
            }
            ),
            r.set(4, e => n(btoa("" + e)));
        try {
            for (r.set(9, JSON.parse(a(atob(e), "" + r.get(16)))); r.get(9).length > 0;) {
                let [ef, ...t] = r.get(9).shift();

                r.get(ef)(...t),
                    i++
            }
            t(btoa("" + i))
        } catch (e) {
            t(btoa(i + ": " + e))
            console.log(e);

        }
    }
    )
}

function a(e, t) {
    let n = "";
    for (let r = 0; r < e.length; r++)
        n += String.fromCharCode(e.charCodeAt(r) ^ t.charCodeAt(r % t.length));
    return n
}

function generateRandomUUID() {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyz';
    let uuid = '';

    for (let i = 0; i < 36; i++) {
        if (i === 8 || i === 13 || i === 18 || i === 23) {
            uuid += '-';
        } else if (i === 14) {
            uuid += '4';
        } else if (i === 19) {
            uuid += characters[(Math.floor(Math.random() * 4) + 8)];
        } else {
            uuid += characters[Math.floor(Math.random() * 16)];
        }
    }

    return uuid;
}
const chatState = {
    RequireToken: null,
    TurnstileToken: null,
    ProofToken: null,
    Param: null
}


const sendButton = document.querySelector('#sendMessage');
const inputMessage = document.querySelector('#inputMessage');
const listMessage = document.querySelector('#listMessage');
const messageSending = document.querySelector('#message_sending');
const BASEURL = "http://localhost/GPT/server.php";
async function getChatRequirement() {

    sendButton.className += ' disabled';
    // tạo ra token mới để vào param yêu cầu api https://chatgpt.com/backend-anon/sentinel/chat-requirements 
    // "0.41299227217709333" ngẫu nhiên từ math ramdom
    const param = "gAAAAAC" + await genToken(Math.random(), "0")
    chatState.Param = param


    const myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");
    const body = {
        p: param
    }
    const headers = [
        "oai-device-id: 513371f1-56f1-4974-9b01-adcd9c93c2ef",
        "content-type:application/json",
        'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
    ]
    const raw = JSON.stringify({
        data: body,
        header: headers,
        url: 'https://chatgpt.com/backend-anon/sentinel/chat-requirements'
    });


    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    try {
        const response = await fetch(BASEURL + "?action=get", requestOptions);

        const result = await response.json();

        if (result) {
            // tạo token cho proof-token  từ response api https://chatgpt.com/backend-anon/sentinel/chat-requirements
            // bỏ vào header openai-sentinel-proof-token trong api conversation
            chatState.ProofToken = "gAAAAAB" + await genToken(result.proofofwork.seed, result.proofofwork.difficulty)
            // tạo token cho turnstile-token  từ response api https://chatgpt.com/backend-anon/sentinel/chat-requirements
            // bỏ vào header openai-sentinel-turnstile-token trong api conversation
            loadResource(param)
            chatState.TurnstileToken = await getTurnstile(result.turnstile.dx)
            chatState.RequireToken = result.token
            sendButton.className = sendButton.className.replace('disabled', '');
        }
    } catch (error) {
        return error
    }
}


// Chuyển đổi các chunk thành các dòng
async function* chunksToLines(chunksAsync) {
    let previous = "";
    for await (const chunk of chunksAsync) {
        // Chuyển đổi chunk thành chuỗi
        const textChunk = typeof chunk === 'string' ? chunk : new TextDecoder().decode(new Uint8Array(chunk));
        previous += textChunk;

        let eolIndex;
        while ((eolIndex = previous.indexOf("\n")) >= 0) {
            const line = previous.slice(0, eolIndex + 1).trimEnd();
            if (line === "data: [DONE]") break;
            if (line.startsWith("data: ")) yield line;
            previous = previous.slice(eolIndex + 1);
        }
    }
}

// Chuyển đổi các dòng thành các thông điệp
async function* linesToMessages(linesAsync) {
    for await (const line of linesAsync) {
        const message = line.substring("data: ".length); // Sửa lỗi đánh máy ở đây

        yield message;
    }
}

// Kết hợp các hàm trên để stream thông điệp
async function* StreamCompletion(data) {
    yield* linesToMessages(chunksToLines(data));
}


async function postMessage(message) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", " application/json");
    const headers = [
        'Content-Type:  application/json',
        'OAI-Language:  vi-VN',
        'OAI-Device-Id:  513371f1-56f1-4974-9b01-adcd9c93c2ef',
        'OpenAI-Sentinel-Chat-Requirements-Token: ' + chatState.RequireToken,
        'OpenAI-Sentinel-Turnstile-Token: ' + chatState.TurnstileToken,
        'OpenAI-Sentinel-Proof-Token: ' + chatState.ProofToken,
        'accept:  text/event-stream',
        'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    ]


    const raw = JSON.stringify({
        header: headers,
        url: "https://chatgpt.com/backend-anon/conversation",
        "message_id": "aaa24bd9-ce3f-4365-b1c3-84b462cbd505",
        "message": message,
        "conversation_id": "fe107877-bc49-41ff-88f3-d7f1293bf803",
        "parent_message_id": "85df1c1f-d6a6-4137-8cb0-98390579d52d",
        "websocket_request_id": "b1c6112c-6fe6-40d7-af90-6a57f2f34445",
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    let fullContent = "";
    fetch(BASEURL + "?action=post", requestOptions)
        .then(response => {
            const reader = response.body.getReader();

            const decoder = new TextDecoder('utf-8');


            function read() {
                return reader.read().then(async ({ done, value }) => {
                    if (done) {
                        console.log('Stream finished');
                        return;
                    }
                    messageSending.style.display = "block";

                    // Giải mã dữ liệu và xử lý
                    let result = decoder.decode(value, { stream: true });
                    for await (const message of StreamCompletion(result)) {
                        const parsed = JSON.parse(message);
                        let content = parsed?.message?.content?.parts[0] || "";
                        messageSending.innerText = content;
                        fullContent = content.length > fullContent.length ? content : fullContent;
                    }

                    // messageSending.style.display = "none"; 
                    read();

                });
            }
            read();
        })
        .catch(error => {
            console.error('Error:', error);
        }).finally(() => {
            inputMessage.value = "";
            getChatRequirement();
            inputMessage.focus();
            // listMessage.innerHTML += `<div class="mt-2 bg-slate-800 px-2 py-2 rounded-lg">${fullContent}</div>`
        });

}




if (!chatState.RequireToken && !chatState.TurnstileToken && !chatState.ProofToken) {
    getChatRequirement();
}

sendButton.addEventListener('click', async () => { 
    if (!chatState.RequireToken || !chatState.TurnstileToken || !chatState.ProofToken) return;
    const message = inputMessage.value;
    postMessage(message); 
})

inputMessage.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      if (!chatState.RequireToken || !chatState.TurnstileToken || !chatState.ProofToken) return;
        const message = inputMessage.value;
        postMessage(message); 
    }
});








