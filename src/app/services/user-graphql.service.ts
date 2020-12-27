import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root"
})
export class CreateUserGQL extends Apollo.Mutation<
  CreateUser.Mutation,
  CreateUser.Variables
> {
  document: any = gql`
  mutation createUser(
    $nombre: String!
    $email: String!
    $fechaNacimiento: String!
    $sexo: String!
    ){
    createUser(
        nombre: $nombre
        email: $email
        fechaNacimiento: $fechaNacimiento
        sexo: $sexo
    ){
      nombre
      email
    }
  }
  `;
}

export namespace CreateUser {

  export type Variables = {
    nombre: string;
    email: string;
    fechaNacimiento: string;
    sexo: string;
  };

  export type Mutation = {
    CreateUser?: CreateUser | null;
  };

  export type CreateUser = {
    nombre: string;
    email: string;
    fechaNacimiento: string;
    sexo: string;
  };
}
