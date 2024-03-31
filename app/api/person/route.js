export async function GET(request) {
  //each method function will get passed the request object
  // const requrl = new URL(request.url);
  // const params = new URLSearchParams(requrl);
  const KEY = process.env.USERKEY;
  const url = `https://random-data-api.com/api/v2/users?size=1&api_key=${KEY}`;
  // console.log(KEY);
  //each method should return a response object
  //we can do a fetch call to another api from here
  let resp = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
    next: { revalidate: 60 },
    //we can set the results as valid for 60 seconds
  });
  const data = await resp.json();

  return new Response(JSON.stringify(data), {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-methods': 'GET,HEAD',
      'access-control-allow-origin': '*',
      'X-by-steve': 'yep',
    },
    status: 200,
  });
}

export async function HEAD(request) {
  return new Response(null, {
    headers: {
      'content-type': 'application/json',
      'content-length': 868,
      'access-control-allow-methods': 'GET,HEAD',
      'access-control-allow-origin': '*',
      'X-by-steve': 'yep',
    },
    status: 200,
  });
}
