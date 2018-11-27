import {ApiModelPropertyOptional} from '@nestjs/swagger';

export class PostAllParams {
    @ApiModelPropertyOptional()
    onlySpotlight: string;

    @ApiModelPropertyOptional()
    limit: number;

    @ApiModelPropertyOptional()
    sortDescendingByKey: string;
}