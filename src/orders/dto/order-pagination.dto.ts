import { PaginationDto } from 'src/common';
import { OrderStatus, OrderStatusList } from '../enum';
import { IsEnum } from 'class-validator';

export class OrderPaginationDto extends PaginationDto {
  @IsEnum(OrderStatusList, {
    message: `Possible status values are ${OrderStatusList}`,
  })
  status: OrderStatus;
}
