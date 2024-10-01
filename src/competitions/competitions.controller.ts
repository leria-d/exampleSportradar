/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { CompetitionsService } from './competitions.service';

@Controller('competitions')
export class CompetitionsController {
  constructor(private readonly competitionsService: CompetitionsService) {}

  @Get(':type/:category')
  async getCompetition(
    @Param('type') type: 'ATP' | 'WTA',
    @Param('category') category: 'singles' | 'doubles' | 'mixed',
  ) {
    return await this.competitionsService.getCompetition(type, category);
  }
}
