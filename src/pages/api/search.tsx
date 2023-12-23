import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    console.log(req, "request");
    const url: string = `/api/v1/plants/search?token=${
      process.env.SECRET_PLANTER_KEY
    }&q=${req.query.id || ""}`;

    const apiRes = await fetch("https://trefle.io" + url)
      .then(async (res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
        return new Error("Could not find species");
      });

    res.send({
      status: 200,
      ok: true,
      body: apiRes,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
