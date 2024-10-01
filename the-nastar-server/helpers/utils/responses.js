export const successResponse = (data, res) => {
  const datas = {
    status: data.status,
    message: data.message,
    data: data.token || data.data,
  };
  res.statusCode = res.statusCode;
  res.json(datas);
  res.end();
};

export const errorResponse = (data, res) => {
  const datas = {
    message: data.message,
  };
  res.statusCode = data.status;
  res.json(datas);
  res.end();
};
