// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Item = {
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item | any>
) {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/3');
    const data = await result.json();
    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}
