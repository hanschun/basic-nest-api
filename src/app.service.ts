import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  private sacramentoUrl = `https://data.cityofsacramento.org/api/search/v1/collections/appAndMap`;

  constructor() {}

  async getSacramentoData(): Promise<Record<string, unknown>> {
    const response = await axios.get(this.sacramentoUrl);
    return response.data;
  }
}
