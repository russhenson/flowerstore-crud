export const handleResponse = (res, err, results) => {
  if (err) {
    res.status(500).json({ error: "Internal server error" });
  } else {
    res.status(200).json(results);
  }
};