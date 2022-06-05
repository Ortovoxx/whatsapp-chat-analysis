// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../database/client";

type UploadResponse = {
    id: string
}

interface HttpError {
    error: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<UploadResponse | HttpError>
) {
    if (req.method === 'POST') {
        console.log(req.body)

        const data = await prisma.chat.create({
            data: {
                createdAt: new Date(),
                data: req.body
            }
        })

        res.status(200).json({ id: data.id })
    } else {
        res.status(500).json({ error: 'Something happened!' })
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '5mb',
        },
    },
}