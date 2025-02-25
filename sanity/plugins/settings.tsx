/**
 * This plugin contains all the logic for setting up the singletons
 */

import type { StructureBuilder } from "sanity/desk";
import type { DocumentDefinition } from "sanity";

export const pageStructure = (typeDefArray: DocumentDefinition[]) => {
  return (S: StructureBuilder) => {
    // Filter out singletons
    const singletonItems = typeDefArray.map((typeDef) => typeDef.name);

    return S.list()
      .title("Content")
      .items([
        // Regular document types
        ...S.documentTypeListItems().filter(
          (listItem) => !singletonItems.includes(listItem.getId() as string)
        ),
        // Singletons
        S.divider(),
        ...typeDefArray.map((typeDef) =>
          S.documentListItem()
            .title(typeDef.title!)
            .id(typeDef.name)
            .schemaType(typeDef.name)
        ),
      ]);
  };
};

export const singletonPlugin = (typeDefArray: string[]) => {
  return {
    name: "singletonPlugin",
    document: {
      // Hide 'Duplicate' action on singletons
      actions: (input: any, context: any) =>
        typeDefArray.includes(context.schemaType)
          ? input.filter(
              ({ action }: { action: string }) => action !== "duplicate"
            )
          : input,

      // Prevent creation of new instances of singletons
      newDocumentOptions: (prev: any, context: any) =>
        typeDefArray.includes(context.creationContext.type)
          ? prev.filter(
              ({ templateId }: { templateId: string }) =>
                !typeDefArray.includes(templateId)
            )
          : prev,

      // Prevent creation of multiple instances of singletons
      validate: (doc: any) => {
        if (typeDefArray.includes(doc._type)) {
          const id = doc._id.replace("drafts.", "");
          if (id !== doc._type) {
            return `There can only be one instance of the ${doc._type} document type.`;
          }
        }
        return true;
      },
    },
  };
};
