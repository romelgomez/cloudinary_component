import {
    runWith,
    HttpsFunction,
    Request,
    Response,
    // config
} from 'firebase-functions';


// import { initializeApp, database } from 'firebase-admin';
// import {  } from './cloudinary.utils';
// const firebaseApp = initializeApp(config().firebase);
// const db = firebaseApp.database();


// import { saveUpdateObjects, algoliase } from './agolia.utils';
// import { Collection } from './firebase.utils';
// import { 
// 	filter,
// 	mergeMap
// } from 'rxjs/operators';


// interface QueryString {
// 	// Algolia Index
// 	index: string;
// 	// Firestore Collection
// 	collection: string;
// 	// Algolia Object Format 
// 	format: string;
// 	// Firestore Collection Query Limit 
// 	limit?: number;
// 	// Firestore Collection Hard Limit
// 	only?: boolean;
// }

// /**
//  * @function algoliaIndex function will send a firestore collection to a algolia index
//  * @example
//  * 
//  * 	[ENDPOINT URL]/?index=[HERE Algolia Index Name]&collection=[HERE firestore collection name]&format=[Algolia Object Format]
//  * 
//  * 	e.g: http://localhost:5001/laundry-242900/us-central1/algoliaIndex?index=&collection=&format=
//  * 
//  */

// cloudinaryUpload
// cloudinaryDeleteByIDs
// cloudinaryDeleteByTag

export const cloudinaryUpload: HttpsFunction = runWith({ memory: '2GB', timeoutSeconds: 540 }).https.onRequest((req: Request, resp: Response) => {

    console.log(req);

    resp
        .status(200)
        .json({
            massage: `ok`,
            code: 200,
        });



	// try {
	// 	const query: QueryString = {
	// 		...req.query
	// 	}

	// 	if (query.index && query.collection && (query.index.toString().length > 0 && query.collection.toString().length > 0)) {

	// 		const limit = typeof query.limit !== 'undefined' && Number(query.limit) ? Number(query.limit) : query.limit;

	// 		const collectionInstance = new Collection(query.collection, limit, query.only);

	// 		const saveAlgoliaRecords = (querySnapshot: firestore.QuerySnapshot<firestore.DocumentData>) => {
	// 			const records = querySnapshot.docs.map((doc: FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>) => algoliase(doc.data(), doc.id, query.format))
	// 			return saveUpdateObjects(query.index, records);
	// 		}
			
	// 		collectionInstance.documents$
	// 			.pipe(
	// 				filter((querySnapshot) => (querySnapshot && querySnapshot.docs.length > 0)),
	// 				mergeMap(saveAlgoliaRecords)
	// 			)
	// 			.subscribe({
	// 				next(results) {
	// 					console.log('results:', results);
	// 				},
	// 				error(error) {
	// 					console.error(JSON.stringify(error));

	// 					resp
	// 						.status(418)
	// 						.json({
	// 							message: error.message,
	// 							code: 418,
	// 							...query
	// 						});
	// 				},
	// 				complete() {
	// 					console.log('DONE');
						
	// 					resp
	// 						.status(200)
	// 						.json({
	// 							massage: `The Firestore collection: ${query.collection}, was indexed successfully! in the Algolia: ${query.index} index.`,
	// 							code: 200,
	// 							...query
	// 						});
	// 				}
	// 			});

	// 	} else {
	// 		throw new Error(`Check that the URL have the required parameters: "[ENDPOINT URL]/?algolia-index-name=[HERE Add Algolia Index Name]&firestore-collection-name=[HERE Add firestore collection name]"`);
	// 	}
	// } catch (error) {
	// 	resp.status(418);
	// 	resp.send({
	// 		message: error.message,
	// 		code: 418
	// 	});
    // }

});
