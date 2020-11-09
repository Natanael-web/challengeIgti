import express from 'express';
import controller from '../controllers/gradeController.js';

const app = express();

app.post('/insert/grade/', controller.create);
app.get('/findall/grade/', controller.findAll);
app.get('/findone/grade/:name', controller.findOne);
app.put('/update/grade/:id', controller.update);
app.delete('/delete/grade/:name', controller.remove);
app.delete('/grade/', controller.removeAll);

export { app as gradeRouter };
