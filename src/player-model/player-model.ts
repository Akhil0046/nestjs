import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class PlayerModel extends Model {
  @Column
  idLineType: number;
  @Column
  idOffice: number;
  @Column
  idAgent: number;
  @Column
  idGrouping: number;
  @Column
  idSource: number;
  @Column
  idProfile: number;
}
