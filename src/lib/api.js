export const getData = async (url, token) => {
  const controller = new AbortController();

  try {
    let res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      signal: controller.signal,
    });

    if (!res.ok) {
      throw new Error({
        err: true,
        status: res.status,
        statusText: !res.status.Text ? "ocurrio un error" : res.statusText,
      });
    }
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
