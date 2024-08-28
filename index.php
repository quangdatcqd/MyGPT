<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CHAT GPT - FREE</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            background-color: #111827;
            color: white;
        }

        .disabled {
            pointer-events: none;
            opacity: 0.6;
        }

        .enabled {
            pointer-events: auto;
            opacity: 1;
        }
    </style>
</head>

<body>
    <div class=" w-[1000px] mx-auto rounded-md relative h-screen relative">
        <div class="flex  gap-2 items-center justify-center flex-row absolute bottom-0 bg-slate-900 text-white px-4 py-5 rounded-md w-full">
            <input type="text" placeholder="Enter your message" class="   rounded-md p-2 bg-slate-800 outline-none   w-[880px]" id="inputMessage" >
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md" id="sendMessage">Send</button>
        </div>
        <div id="listMessage" class="px-2 py-2 rounded-lg">
            <div class="mt-2 bg-slate-800 px-2 py-2 rounded-lg" id="message_sending"> </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/js-sha3/0.9.3/sha3.min.js" crossorigin="anonymous"
        referrerpolicy="no-referrer"></script>
    <script src="app.js"></script>
</body>

</html>