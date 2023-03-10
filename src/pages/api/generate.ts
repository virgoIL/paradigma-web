import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    res.status(200).json({})
}
