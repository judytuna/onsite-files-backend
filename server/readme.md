# API Documentation

## POST /api/projects _(already implemented)_

Create new project.

#### Body Parameters

Name | Type | Description
:--- | :--- | :---------
`name` | `String` | Name of the project (required).

#### Example Response (Status: 200)

```js
{
  _id: '524641ff6673e40400000014',
  name: 'Project A',
} 
```

## GET /api/projects _(already implemented)_

Get all projects.

#### Example Response (Status: 200)

```js
[
  {
    _id: '524641ff6673e40400000014',
    name: 'Project A',
  },
  {
    _id: '524641ff6673e40400000015',
    name: 'Project B',
  },
] 
```

## POST /api/files _(partially implemented)_

Upload a new file.

#### Query Parameters
Name | Type | Description
:--- | :--- | :---------
`projectId` | `ObjectId` | ID of this project (required).
`parentId` | `ObjectId` | ID of this file's parent (optional) (defaults to `projectId` which is considered to be the root folder of this project).

#### Body Parameters

Name | Type | Description
:--- | :--- | :---------
`file` | `Multipart` | The actual file to be uploaded (required).
`fielname` | `String` | The name of the file (required).
`size` | `Number` | The size of the file in bytes.

#### Example Response (Status: 200)

```js
{
  _id: '524641ff6673e40400000012',
  name: 'File A',
  size: 10000,
  parentId: '524641ff6673e40400000010',
  projectId: '524641ff6673e40400000091',
} 
```

## GET /api/files/

Gets all files and folders at the root of a project.

#### Query Parameters
Name | Type | Description
:--- | :--- | :---------
`projectId` | `ObjectId` | ID of this project (required).

#### Example Response (Status: 200)

```js
[
  {
    _id: '524641ff6673e40400000014',
    dateModified: '2013-09-28T02:42:07Z',
    name: 'File A.pdf',
    parentId: '524641ff6673e40400000015',
    projectId: '524641ff6673e40400000015',
    size: 10000,
    type: 'FILE',
  },
  {
    _id: '524641ff6673e40400000014',
    dateModified: '2013-09-28T02:42:07Z',
    name: 'Folder A.pdf',
    parentId: '524641ff6673e40400000015',
    projectId: '524641ff6673e40400000015',
    size: '',
    type: 'FOLDER',
  }
]
```

## GET /api/files/{fileId}/content

Downloads the actual contents of a file.

#### Example Response (Status: 302)

Browser should be automatically redirected to an S3 endpoint.  That endpoint should cease to function after 60 seconds.

## POST /api/folders

Creates a new folder.

#### Query Parameters
Name | Type | Description
:--- | :--- | :---------
`projectId` | `ObjectId` | ID of this project (required).
`parentId` | `ObjectId` | ID of this folders's parent (optional) (defaults to `projectId` which is considered to be the root folder of this project).

#### Body Parameters

Name | Type | Description
:--- | :--- | :---------
`fielname` | `String` | The name of the folder (required).

#### Example Response (Status: 200)

```js
{
  _id: '524641ff6673e40400000012',
  name: 'Folder A',
  size: '',
  parentId: '524641ff6673e40400000010',
  projectId: '524641ff6673e40400000091',
} 
```

## GET /api/folders/{folderId}/items

Gets all files and folders within a given `folderId`.

#### Example Response (Status: 200)

```js
[
  {
    _id: '524641ff6673e40400000014',
    dateModified: '2013-09-28T02:42:07Z',
    name: 'File A.pdf',
    parentId: '524641ff6673e40400000015',
    projectId: '524641ff6673e40400000015',
    size: 10000,
    type: 'FILE',
  },
  {
    _id: '524641ff6673e40400000014',
    dateModified: '2013-09-28T02:42:07Z',
    name: 'Folder A.pdf',
    parentId: '524641ff6673e40400000015',
    projectId: '524641ff6673e40400000015',
    size: '',
    type: 'FOLDER',
  }
]
```

