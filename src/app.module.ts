import {NecordModule} from 'necord';
import {Module} from '@nestjs/common';
import {IntentsBitField} from 'discord.js';
import { AppUpdate } from './app.update';

@Module({
	imports: [
		NecordModule.forRoot({
			token: process.env.DISCORD_TOKEN,
			intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.DirectMessages]
		})
	],
	providers: [AppUpdate]
})
export class AppModule {
}