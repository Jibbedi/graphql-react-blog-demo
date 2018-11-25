import { IComment } from '../../../model/Comment';
import { ApiModelProperty } from '@nestjs/swagger';

export class Comment implements IComment {
  @ApiModelProperty()
  id: string;
  @ApiModelProperty()
  authorId: string;
  @ApiModelProperty()
  title: string;
  @ApiModelProperty()
  content: string;
  @ApiModelProperty()
  responseCommentIds: string[];
  @ApiModelProperty()
  likes: number;
  @ApiModelProperty()
  createTimestamp: number;
}
