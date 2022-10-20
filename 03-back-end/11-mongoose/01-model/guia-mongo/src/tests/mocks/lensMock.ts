import ILens from '../../interfaces/ILens';
import { IDelete } from '../../interfaces/IModel';

interface ILensId extends ILens {
  _id: string;
}

export const lensMock: ILens = {
  degree: 1.5,
  antiGlare: true,
  blueLightFilter: false,
};

export const lensMockWithId: ILensId = {
  _id: '62cf1fc6498565d94eba52cd',
  degree: 1.5,
  antiGlare: true,
  blueLightFilter: false,
};

export const lensArrayMockWithId: ILensId[] = [
  {
    _id: '62cf1fc6498515d94eba52cd',
    degree: 1.5,
    antiGlare: true,
    blueLightFilter: false,
  },
  {
    _id: '62cf1fc6258565d94eba52cd',
    degree: 2.0,
    antiGlare: false,
    blueLightFilter: false,
  },
];

export const correctID = '62cf1fc6498515d94eba52cd';
export const incorrectID = 'sjdaodao';

export const deletedLens: IDelete = {
  acknowledged: true,
  deletedCount: 1,
};
