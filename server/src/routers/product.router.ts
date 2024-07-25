import express from 'express';
import asyncHandler from 'express-async-handler';
import fs from 'fs/promises';

const router = express.Router();

// Path to the database file

const dbFilePath = "db.json";


router.get('/', asyncHandler(async (req, res, next) => {
  try {
    const page = parseInt(req.query.page as string) || 0;
    const perPage = parseInt(req.query.perPage as string) || 10;

    const data = await fs.readFile(dbFilePath, 'utf8');
    
    const jsonData = JSON.parse(data);
    //console.log(jsonData);
    const start = page * perPage;
    const end = start + perPage;
    const result = jsonData.items.slice(start, end);

    res.status(200).json({
      items: result,
      total: jsonData.items.length,
      page,
      perPage,
      totalPages: Math.ceil(jsonData.items.length / perPage),
    });
  } catch (err) {
    next(err);
  }
}));

// POST route - Add a new item
router.post('/', asyncHandler(async (req, res, next) => {
  try {
    const { image, name, price, rating } = req.body;

    const data = await fs.readFile(dbFilePath, 'utf8');
    const jsonData = JSON.parse(data);

    const maxId = jsonData.items.reduce((max: number, item:any) => Math.max(max, item.id), 0);

    const newItem = {
      id: maxId + 1,
      image,
      name,
      price,
      rating,
    };

    jsonData.items.push(newItem);

    await fs.writeFile(dbFilePath, JSON.stringify(jsonData));
    res.status(201).json(newItem);
  } catch (err) {
    next(err);
  }
}));

// PUT route - Update an item
router.put('/:id', asyncHandler(async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { image, name, price, rating } = req.body;

    const data = await fs.readFile(dbFilePath, 'utf8');
    const jsonData = JSON.parse(data);

    const index = jsonData.items.findIndex((item:any) => item.id === id);

    if (index === -1) {
      res.status(404).send('Not Found');
      return;
    }

    jsonData.items[index] = { id, image, name, price, rating };

    await fs.writeFile(dbFilePath, JSON.stringify(jsonData));
    res.status(200).json(jsonData.items[index]);
  } catch (err) {
    next(err);
  }
}));

// DELETE route - Delete an item
router.delete('/:id', asyncHandler(async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const data = await fs.readFile(dbFilePath, 'utf8');
    const jsonData = JSON.parse(data);

    const index = jsonData.items.findIndex((item:any) => item.id === id);

    if (index === -1) {
      res.status(404).send('Not Found');
      return;
    }

    jsonData.items.splice(index, 1);

    await fs.writeFile(dbFilePath, JSON.stringify(jsonData));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}));

export default router;
