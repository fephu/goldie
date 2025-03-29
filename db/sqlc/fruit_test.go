package db

import (
	"context"
	"testing"
	"time"

	"github.com/fephu/fresh-fruit/util"
	"github.com/stretchr/testify/require"
)

func createRandomFruit(t *testing.T) Fruit {
	randomName := util.RandomString(4)

	fruit, err := testStore.CreateFruit(context.Background(), randomName)
	require.NoError(t, err)
	require.NotEmpty(t, fruit)

	require.Equal(t, randomName, fruit.Name)

	require.NotZero(t, fruit.ID)
	require.NotZero(t, fruit.CreatedAt)

	return fruit
}

func TestCreateFruit(t *testing.T) {
	createRandomFruit(t)
}

func TestGetFruit(t *testing.T) {
	testFruit := createRandomFruit(t)

	fruit, err := testStore.GetFruit(context.Background(), testFruit.ID)
	require.NoError(t, err)
	require.NotEmpty(t, fruit)

	require.Equal(t, testFruit.ID, fruit.ID)
	require.Equal(t, testFruit.Name, fruit.Name)
	require.WithinDuration(t, testFruit.CreatedAt, fruit.CreatedAt, time.Second)
}

func TestUpdateFruit(t *testing.T) {
	testFruit := createRandomFruit(t)

	arg := UpdateFruitParams{
		ID:   testFruit.ID,
		Name: util.RandomString(4),
	}

	fruit, err := testStore.UpdateFruit(context.Background(), arg)
	require.NoError(t, err)
	require.NotEmpty(t, fruit)

	require.Equal(t, testFruit.ID, fruit.ID)
	require.Equal(t, arg.Name, fruit.Name)
	require.WithinDuration(t, testFruit.CreatedAt, fruit.CreatedAt, time.Second)
}

func TestDeleteFruit(t *testing.T) {
	testFruit := createRandomFruit(t)

	err := testStore.DeleteFruit(context.Background(), testFruit.ID)
	require.NoError(t, err)

	fruit, err := testStore.GetFruit(context.Background(), testFruit.ID)
	require.Error(t, err)
	require.EqualError(t, err, ErrRecordNotFound.Error())
	require.Empty(t, fruit)
}

func TestListFruits(t *testing.T) {
	for i := 0; i < 10; i++ {
		createRandomFruit(t)
	}

	arg := ListFruitsParams{
		Limit:  5,
		Offset: 5,
	}

	fruits, err := testStore.ListFruits(context.Background(), arg)
	require.NoError(t, err)
	require.Len(t, fruits, 5)

	for _, fruit := range fruits {
		require.NotEmpty(t, fruit)
	}
}
