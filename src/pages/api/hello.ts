// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Item = {
  title: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item | any>
) {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => res.status(200).json(json))
    .catch((error) => res.status(500).json({ error }));
}
