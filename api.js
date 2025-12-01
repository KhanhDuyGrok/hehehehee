export default async function handler(req, res) {
    const { key, userid } = req.query;

    // Danh sách key hợp lệ (bạn có thể chuyển sang database/Google Sheet)
    const validKeys = {
        "KEY-29A2C-1F9DA-93FF1": "Premium",
        "KEY-9BB1E-67DA1-22C9F": "Standard",
    };

    if (!key || !userid) {
        return res.status(400).json({ status: false, message: "Missing key or userid" });
    }

    if (!validKeys[key]) {
        return res.json({ status: false, message: "Invalid key" });
    }

    return res.json({
        status: true,
        message: "Key valid",
        userLevel: validKeys[key],
        userid: userid
    });
}
