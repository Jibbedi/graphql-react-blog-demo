import { ApiModelProperty } from '@nestjs/swagger';
import { IPost } from '../../../model/Post';

export class Post implements IPost {
  @ApiModelProperty()
  id: string;
  @ApiModelProperty()
  title: string;
  @ApiModelProperty()
  thumbnailUrl: string;
  @ApiModelProperty()
  imageUrl: string;
  @ApiModelProperty()
  content: string;
  @ApiModelProperty()
  excerpt: string;
  @ApiModelProperty()
  commentIds: string[];
  @ApiModelProperty()
  authorId: string;
  @ApiModelProperty()
  createTimestamp: number;
  @ApiModelProperty()
  views: number;
  @ApiModelProperty()
  isSpotlight: boolean;
}
