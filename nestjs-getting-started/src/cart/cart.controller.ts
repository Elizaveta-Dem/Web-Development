// /* eslint-disable prettier/prettier */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
//   UseGuards,
// } from '@nestjs/common';
// import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
// import { CartService } from './cart.service';
// import { CreateCartDto } from './dto/create-cart.dto';
// import { CartEntity } from './entities/cart.entity';
// import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

// @ApiTags('cart')
// // @ApiBearerAuth()
// @Controller('cart')
// export class CartController {
//   constructor(private readonly cartService: CartService) {}

//   @Post('/add')
//   // @UseGuards(JwtAuthGuard)
//   // @ApiBearerAuth()
//   add(@Body() dto: CreateCartDto): Promise<CartEntity> {
//     return this.cartService.add(dto);
//   }

//   @Get(':id')
//   // @UseGuards(JwtAuthGuard)
//   // @ApiBearerAuth()
//   findAll(@Param(':id') userid: number) {
//     return this.cartService.findAll(userid);
//   }

//   @Patch('/quantity/:id')
//   // @UseGuards(JwtAuthGuard)
//   // @ApiBearerAuth()
//   updateQuantity(
//     @Body() {quantity}: { quantity: number },
//     @Param('id') productid: number,) {
//     return this.cartService.updateQuantity(quantity, productid);
//   }

//   @Patch('/total-price/:id')
//   // @UseGuards(JwtAuthGuard)
//   // @ApiBearerAuth()
//   updateTotalPrice(
//     @Body() {totalPrice}: { totalPrice: number },
//     @Param('id') productid: number,) {
//     return this.cartService.updateTotalPrice(totalPrice, productid);
//   }

//   @Delete('/delete-one/:id')
//   // @UseGuards(JwtAuthGuard)
//   // @ApiBearerAuth()
//   removeOne(@Param('id') productid: number) {
//     return this.cartService.remove(productid);
//   }

// }

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { CartEntity } from './entities/cart.entity';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('/add')
  add(@Body() dto: CreateCartDto): Promise<CartEntity> {
    return this.cartService.add(dto);
  }

  @Get(':id')
  findAll(@Param('id') userid: number) {
    return this.cartService.findAll(userid);
  }

  @Patch('/quantity/:id')
  updateQuantity(
    @Body() { quantity }: { quantity: number },
    @Param('id') productid: number,
  ) {
    return this.cartService.updateQuantity(quantity, productid);
  }

  @Patch('/total-price/:id')
  updateTotalPrice(
    @Body() { totalPrice }: { totalPrice: number },
    @Param('id') productid: number,
  ) {
    return this.cartService.updateTotalPrice(totalPrice, productid);
  }

  @Delete('/delete-one/:id')
  removeOne(@Param('id') productid: number) {
    return this.cartService.remove(productid);
  }
}
