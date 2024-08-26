import Project from '@/models/Project';
import { connectDatabase } from '@/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  connectDatabase();

  const { method } = request;
  
  const { id } = request.query;

  switch (method) {
    case 'GET':
      try {
        const project = await Project.findById(id);
        if (!project) return response.status(402).json({ msg: 'Projeto não encontrado!' });
        response.status(200).json({ msg: 'Listagem realizada com sucesso!!', project });
      } catch (error) {
        response.status(500).json({ msg: 'Aconteceu um erro no servidor!', error });
        console.log(error);
      }
      break;
  }
}
