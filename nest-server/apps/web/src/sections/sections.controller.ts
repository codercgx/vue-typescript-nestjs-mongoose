import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Section } from '@libs/db/models/section.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Controller('sections')
export class SectionsController {
    constructor(
        @InjectModel(Section) private sectionModel: ReturnModelType<typeof Section>
    ){}

    
}
