/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CompetitionsService {
  getCompetition = async (
    type: 'ATP' | 'WTA',
    category: 'singles' | 'doubles' | 'mixed',
  ) => {
    const { data } = await this.getCompetitionFromSportRadar(type);
    console.log(data);

    const filteredCompetitions = data.competitions.filter(
      (competition: any) => competition.type === category,
    );

    console.log('filteredCompetitions ==>', filteredCompetitions);

    return filteredCompetitions;
  };

  getCompetitionFromSportRadar = async (type: 'ATP' | 'WTA') => {
    switch (type) {
      case 'ATP':
        return await axios.get(
          `https://api.sportradar.com/tennis/trial/v3/en/categories/sr:category:3/competitions.json?api_key=nVX8n55L4l8TAM3yjqKiN4VRemJqr5yx4JQlIhqf`,
        );
      case 'WTA':
        return await axios.get(
          `https://api.sportradar.com/tennis/trial/v3/en/categories/sr:category:6/competitions.json?api_key=nVX8n55L4l8TAM3yjqKiN4VRemJqr5yx4JQlIhqf`,
        );
      default:
        null;
    }
  };
}
