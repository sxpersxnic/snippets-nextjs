import { UUID } from 'lib/types/UUID';

export default interface SnippetModel {
  id: UUID;
  title: string;
  content: string;
  language: string;
  createdAt: Date;
  updatedAt: Date;
}