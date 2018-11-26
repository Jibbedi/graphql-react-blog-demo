import { IComment } from '../../../model/Comment';
import { ApiModelProperty } from '@nestjs/swagger';
import { HatoasLink } from './HatoasLink';

export class Comment  {
  @ApiModelProperty()
  id: string;
  @ApiModelProperty()
  title: string;
  @ApiModelProperty()
  content: string;
  @ApiModelProperty()
  likes: number;
  @ApiModelProperty()
  createTimestamp: number;
  @ApiModelProperty()
  links : HatoasLink[];
}
