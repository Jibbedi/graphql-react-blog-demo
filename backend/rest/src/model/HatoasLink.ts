import { ApiModelProperty } from '@nestjs/swagger';

export class HatoasLink {
  @ApiModelProperty()
  rel: string;
  @ApiModelProperty()
  href: string;

  constructor(rel: string, href: string) {
    this.rel = rel;
    this.href = href;
  }
}
