exports.name = '/instagramdown';
exports.index = async (req, res, next) => {
  const link = req.query.link;
  if (!link) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình ' });
  const axios = require('axios');

  const options = {
    method: 'POST',
    url: 'https://all-video-downloader1.p.rapidapi.com/Instagram',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'c320de0ac9msh8c90df54d8babafp144ae9jsn419b1c1a8f14',
      'X-RapidAPI-Host': 'all-video-downloader1.p.rapidapi.com'
    },
    data: { url: link }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    return res.json({ error: 'Có lỗi xảy ra khi tải xuống dữ liệu từ Instagram' });
  }
};
