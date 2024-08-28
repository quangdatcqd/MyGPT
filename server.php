<?php


// Nhận dữ liệu JSON từ yêu cầu POST
$json = file_get_contents('php://input');

// Giải mã JSON thành mảng PHP
$data = json_decode($json, true);

$headers = '';
$URL = "";
// Kiểm tra xem dữ liệu có được giải mã thành công không
if (json_last_error() === JSON_ERROR_NONE) {
    // Truy cập các tham số 
    $headers = $data['header'];
    $URL = $data['url'];
} else {
    echo "Invalid JSON received";
    die();
}

if (isset($_GET["action"]) && $_GET["action"] == "get") {

    try {
        $body = json_encode($data['data']);
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => $URL,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => $body,
            CURLOPT_HTTPHEADER =>  $headers,
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        echo $response;
    } catch (\Throwable $th) {
        throw $th;
    }
}


if (isset($_GET["action"]) && $_GET["action"] == "post") {

    try {
        $body = json_encode(array(
            "action" => "next",
            "messages" => array(
                array(
                    "id" => $data['message_id'],
                    "author" => array(
                        "role" => "user"
                    ),
                    "content" => array(
                        "content_type" => "text",
                        "parts" => array(
                            $data['message']
                        )
                    ),
                    "metadata" => new stdClass(),
                    "create_time" => 1724821408.609
                )
            ),
            "conversation_id" => $data['conversation_id'],
            "parent_message_id" => $data['parent_message_id'],
            "model" => "auto",
            "timezone_offset_min" => -420,
            "suggestions" => array(),
            "history_and_training_disabled" => false,
            "conversation_mode" => array(
                "kind" => "primary_assistant"
            ),
            "force_paragen" => false,
            "force_paragen_model_slug" => "",
            "force_nulligen" => false,
            "force_rate_limit" => false,
            "reset_rate_limits" => false,
            "websocket_request_id" => $data['websocket_request_id'],
            "system_hints" => array(),
            "force_use_sse" => true,
            "conversation_origin" => null
        ));
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => $URL,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS =>  $body,
            CURLOPT_HTTPHEADER =>  $headers,
            CURLOPT_WRITEFUNCTION => function ($curl, $data) {
                // Gửi dữ liệu đến client khi nhận được
                echo $data;
                ob_flush(); // Xóa bộ đệm ra
                flush();    // Gửi dữ liệu đến client
                return strlen($data);
            }
        ));

        // Thực hiện yêu cầu cURL
        curl_exec($curl);

        // Đóng cURL
        curl_close($curl);
    } catch (\Throwable $th) {
        throw $th;
    }
}
