import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import config from './config';

import { AuthModule } from './modules/auth.module';
import { UserModule } from './modules/user.module';
import { CategoriesModule } from './modules/category.module';
import { ProductsModule } from './modules/product.module';


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [config]
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('dbUrl'),
            }),
            inject: [ConfigService],
        }),
        // Модули
        AuthModule,
        UserModule,
        CategoriesModule,
        ProductsModule
    ]
})


export class AppModule {}
