import { ApiModelProperty } from '@nestjs/swagger';
import { HatoasLink } from './HatoasLink';

export class Post {
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
  createTimestamp: number;
  @ApiModelProperty()
  views: number;
  @ApiModelProperty()
  isSpotlight: boolean;
  @ApiModelProperty()
  links: HatoasLink[];
}
