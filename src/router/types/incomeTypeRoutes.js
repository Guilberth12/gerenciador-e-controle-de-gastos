import { Router } from "express";
import {
    createIncomeType,
    findIncomeTypes,
    updateIncomeType,
    deleteIncomeType
} from '../../controller/type-incomes/incomeTypeController.js';

const incomeTypeRouter = Router();

incomeTypeRouter.post('/', createIncomeType);
incomeTypeRouter.get('/', findIncomeTypes);
incomeTypeRouter.put('/:id', updateIncomeType);
incomeTypeRouter.delete('/:id', deleteIncomeType);

export default incomeTypeRouter;