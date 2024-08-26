import Project from '@/models/Project';
import { connectDatabase } from '@/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  connectDatabase();

  const { method } = request;

  switch (method) {
    case 'GET':
      try {
        const projects = await Project.find();
        if (!projects) return response.status(402).json({ msg: 'Projetos não encontrados!' });
        return response.status(200).json({ msg: 'Listagem realizada com sucesso!!', projects });
      } catch (error) {
        response.status(500).json({ msg: 'Aconteceu um erro no servidor!', error });
        console.log(error);
      }
      break;
    case 'POST':
      try {
        await Project.create({ ...request.body });
        response.status(200).json({ msg: 'Projeto criado com sucesso!!' });
      } catch (error) {
        response.status(500).json({ msg: 'Aconteceu um erro no servidor!', error });
        console.log(error);
      }
  }
}
