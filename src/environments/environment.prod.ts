import { SpoonacularService } from "src/app/services/spoonacular.service";
import { SpoonacularServiceMock  } from "src/app/services/spoonacular.mock.service";


export const environment = {
  production: true,
  providers: [
    {provide : SpoonacularServiceMock, useClass: SpoonacularService}
  ]
};
