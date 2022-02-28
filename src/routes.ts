import { Request, Response} from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response){
  CreateCourseService.execute({ 
    name: "Node Js",
    duration: 5,
    educator: "Lucas"
  });

  CreateCourseService.execute({ 
    name: "React JS",
    educator: "Amanda"
  });

  return response.send();
}