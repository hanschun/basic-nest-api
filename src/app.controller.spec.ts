import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import axios from 'axios';
import { sacramentoResponse } from '../test-data/sacramento-data.json';

const mockGet = jest.fn();

const mockAxios = {
  get: mockGet,
}

describe('AppController', () => {
  let app: TestingModule;
  let controller: AppController;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService, 
        {
          provide: axios,
          useValue: mockAxios, 
        }],
    }).compile();

    controller = app.get(AppController);
  });

  describe('getSacramento', () => {
    it('should get basic data for Sacramento', async () => {
      mockGet.mockResolvedValue(sacramentoResponse);

      const response = await controller.getSacramentoData();

      expect(response).toEqual(sacramentoResponse);
      expect(response['title']).toBe('Apps & Maps');
    })
  });
});
