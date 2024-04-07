/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/users": {
    get: operations["GetAllUsers"];
  };
  "/users/self": {
    get: operations["GetSelf"];
  };
  "/users/create": {
    put: operations["CreateUser"];
  };
  "/users/edit-self": {
    patch: operations["EditSelf"];
  };
  "/users/bulk-edit": {
    patch: operations["EditUsers"];
  };
  "/users/promote": {
    put: operations["PromoteUser"];
  };
  "/users/demote": {
    put: operations["DemoteUser"];
  };
  "/webhook": {
    post: operations["ReceiveWebhook"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /**
     * @description A Timestamp represents a point in time independent of any time zone or
     * calendar, represented as seconds and fractions of seconds at nanosecond
     * resolution in UTC Epoch time. It is encoded using the Proleptic Gregorian
     * Calendar which extends the Gregorian calendar backwards to year one. It is
     * encoded assuming all minutes are 60 seconds long, i.e. leap seconds are
     * "smeared" so that no leap second table is needed for interpretation. Range
     * is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z.
     */
    "FirebaseFirestore.Timestamp": {
      /**
       * Format: double
       * @description The number of seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
       */
      seconds: number;
      /**
       * Format: double
       * @description The non-negative fractions of a second at nanosecond resolution.
       */
      nanoseconds: number;
    };
    UserAdditionalInfo: {
      date_of_birth: components["schemas"]["FirebaseFirestore.Timestamp"];
      does_freestyle: boolean;
      does_racing: boolean;
      does_ski: boolean;
      gender: string;
      emergency_name: string;
      emergency_phone: string;
      emergency_relation: string;
      first_name: string;
      last_name: string;
      /** @enum {string} */
      membership: "admin" | "member" | "guest";
      dietary_requirements: string;
      faculty?: string;
      university?: string;
      student_id?: string;
      returning: boolean;
      university_year: string;
    };
    FirebaseProperties: {
      uid: string;
    };
    UserResponse: components["schemas"]["UserAdditionalInfo"] & components["schemas"]["FirebaseProperties"];
    CreateUserRequestBody: {
      uid: string;
      user: components["schemas"]["UserAdditionalInfo"];
    };
    /** @description From T, pick a set of properties whose keys are in the union K */
    "Pick_Partial_UserAdditionalInfo_.Exclude_keyofPartial_UserAdditionalInfo_.membership__": {
      date_of_birth?: components["schemas"]["FirebaseFirestore.Timestamp"];
      does_freestyle?: boolean;
      does_racing?: boolean;
      does_ski?: boolean;
      gender?: string;
      emergency_name?: string;
      emergency_phone?: string;
      emergency_relation?: string;
      first_name?: string;
      last_name?: string;
      dietary_requirements?: string;
      faculty?: string;
      university?: string;
      student_id?: string;
      returning?: boolean;
      university_year?: string;
    };
    /** @description Construct a type with the properties of T except for those in type K. */
    "Omit_Partial_UserAdditionalInfo_.membership_": components["schemas"]["Pick_Partial_UserAdditionalInfo_.Exclude_keyofPartial_UserAdditionalInfo_.membership__"];
    EditSelfRequestBody: {
      updatedInformation: components["schemas"]["Omit_Partial_UserAdditionalInfo_.membership_"];
    };
    /** @description Make all properties in T optional */
    Partial_UserAdditionalInfo_: {
      date_of_birth?: components["schemas"]["FirebaseFirestore.Timestamp"];
      does_freestyle?: boolean;
      does_racing?: boolean;
      does_ski?: boolean;
      gender?: string;
      emergency_name?: string;
      emergency_phone?: string;
      emergency_relation?: string;
      first_name?: string;
      last_name?: string;
      /** @enum {string} */
      membership?: "admin" | "member" | "guest";
      dietary_requirements?: string;
      faculty?: string;
      university?: string;
      student_id?: string;
      returning?: boolean;
      university_year?: string;
    };
    EditUsersRequestBody: {
      users: {
          updatedInformation: components["schemas"]["Partial_UserAdditionalInfo_"];
          uid: string;
        }[];
    };
    PromoteUserRequestBody: {
      uid: string;
    };
    DemoteUserRequestBody: {
      uid: string;
    };
  };
  responses: {
  };
  parameters: {
  };
  requestBodies: {
  };
  headers: {
  };
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  GetAllUsers: {
    responses: {
      /** @description Users found */
      200: {
        content: {
          "application/json": components["schemas"]["UserResponse"][];
        };
      };
    };
  };
  GetSelf: {
    responses: {
      /** @description Fetched self data */
      200: {
        content: {
          "application/json": components["schemas"]["UserResponse"];
        };
      };
    };
  };
  CreateUser: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateUserRequestBody"];
      };
    };
    responses: {
      /** @description Created */
      200: {
        content: never;
      };
    };
  };
  EditSelf: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["EditSelfRequestBody"];
      };
    };
    responses: {
      /** @description Successful edit */
      200: {
        content: never;
      };
    };
  };
  EditUsers: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["EditUsersRequestBody"];
      };
    };
    responses: {
      /** @description Edited */
      200: {
        content: never;
      };
    };
  };
  PromoteUser: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["PromoteUserRequestBody"];
      };
    };
    responses: {
      /** @description Promoted user */
      200: {
        content: never;
      };
    };
  };
  DemoteUser: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["DemoteUserRequestBody"];
      };
    };
    responses: {
      /** @description Demoted user */
      200: {
        content: never;
      };
    };
  };
  ReceiveWebhook: {
    responses: {
      /** @description Webhook post received */
      200: {
        content: never;
      };
    };
  };
}
